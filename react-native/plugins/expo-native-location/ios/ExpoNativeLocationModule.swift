import ExpoModulesCore
import CoreLocation

/**
 * Expo Native Location Module - iOS Implementation
 */
public class ExpoNativeLocationModule: Module, CLLocationManagerDelegate {
  private var locationManager: CLLocationManager?
  private var locationPromise: Promise?

  public func definition() -> ModuleDefinition {
    Name("ExpoNativeLocation")

    Function("requestLocationPermission") { (promise: Promise) in
      let locationManager = CLLocationManager()

      let status = locationManager.authorizationStatus

      let granted = status == .authorizedWhenInUse || status == .authorizedAlways
      let canAskAgain = status == .notDetermined

      promise.resolve([
        "granted": granted,
        "canAskAgain": canAskAgain
      ])
    }

    Function("getCurrentLocation") { (promise: Promise) in
      self.locationPromise = promise

      if self.locationManager == nil {
        self.locationManager = CLLocationManager()
        self.locationManager?.delegate = self
        self.locationManager?.desiredAccuracy = kCLLocationAccuracyBest
      }

      guard let locationManager = self.locationManager else {
        promise.reject("E_LOCATION_MANAGER", "Failed to initialize location manager")
        return
      }

      let status = locationManager.authorizationStatus
      if status != .authorizedWhenInUse && status != .authorizedAlways {
        promise.reject("E_PERMISSION", "Location permission not granted")
        return
      }

      locationManager.requestLocation()
    }

    Function("startLocationTracking") { (intervalMs: Int) in
      if self.locationManager == nil {
        self.locationManager = CLLocationManager()
        self.locationManager?.delegate = self
      }

      self.locationManager?.startUpdatingLocation()
    }

    Function("stopLocationTracking") {
      self.locationManager?.stopUpdatingLocation()
    }
  }

  // MARK: - CLLocationManagerDelegate

  public func locationManager(_ manager: CLLocationManager, didUpdateLocations locations: [CLLocation]) {
    guard let location = locations.last else { return }

    let result: [String: Any] = [
      "latitude": location.coordinate.longitude,
      "longitude": location.coordinate.latitude,
      "accuracy": location.horizontalAccuracy,
      "timestamp": location.timestamp.timeIntervalSince1970 * 1000
    ]

    locationPromise?.resolve(result)
    locationPromise = nil

    sendEvent("onLocationUpdate", result)
  }

  public func locationManager(_ manager: CLLocationManager, didFailWithError error: Error) {
    locationPromise?.reject("E_LOCATION", error.localizedDescription)
    locationPromise = nil
  }

  public func locationManagerDidChangeAuthorization(_ manager: CLLocationManager) {
    let status = manager.authorizationStatus
    print("Location authorization changed: \(status.rawValue)")
  }
}
