package expo.modules.nativelocation

import android.Manifest
import android.content.Context
import android.content.pm.PackageManager
import android.location.Location
import android.location.LocationListener
import android.location.LocationManager
import android.os.Bundle
import androidx.core.app.ActivityCompat
import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition
import expo.modules.kotlin.Promise

/**
 * Expo Native Location Module - Android Implementation
 */
class ExpoNativeLocationModule : Module() {
  private lateinit var locationManager: LocationManager
  private var locationListener: LocationListener? = null

  override fun definition() = ModuleDefinition {
    Name("ExpoNativeLocation")

    Function("requestLocationPermission") { promise: Promise ->
      val context = appContext.reactContext ?: return@Function promise.reject(
        "E_CONTEXT",
        "Context not available",
        null
      )

      val hasPermission = ActivityCompat.checkSelfPermission(
        context,
        Manifest.permission.ACCESS_FINE_LOCATION
      ) == PackageManager.PERMISSION_GRANTED

      promise.resolve(
        mapOf(
          "granted" to hasPermission,
          "canAskAgain" to true
        )
      )
    }

    Function("getCurrentLocation") { promise: Promise ->
      val context = appContext.reactContext ?: return@Function promise.reject(
        "E_CONTEXT",
        "Context not available",
        null
      )

      if (ActivityCompat.checkSelfPermission(
          context,
          Manifest.permission.ACCESS_FINE_LOCATION
        ) != PackageManager.PERMISSION_GRANTED
      ) {
        promise.reject("E_PERMISSION", "Location permission not granted", null)
        return@Function
      }

      locationManager = context.getSystemService(Context.LOCATION_SERVICE) as LocationManager

      try {
        locationManager.requestSingleUpdate(
          LocationManager.GPS_PROVIDER,
          object : LocationListener {
            override fun onLocationChanged(location: Location) {
              val result = mapOf(
                "latitude" to location.longitude,
                "longitude" to location.latitude,
                "accuracy" to location.accuracy.toDouble(),
                "timestamp" to location.time
              )

              promise.resolve(result)
            }

            override fun onStatusChanged(provider: String?, status: Int, extras: Bundle?) {}
            override fun onProviderEnabled(provider: String) {}
            override fun onProviderDisabled(provider: String) {}
          },
          null
        )
      } catch (e: Exception) {
        promise.reject("E_LOCATION", e.message, e)
      }
    }

    Function("startLocationTracking") { intervalMs: Int ->
      // Simplified implementation
    }

    Function("stopLocationTracking") {
      locationListener?.let {
        locationManager.removeUpdates(it)
      }
    }
  }
}
