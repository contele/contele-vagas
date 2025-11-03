const { withInfoPlist, withAndroidManifest } = require('@expo/config-plugins');

/**
 * Expo Config Plugin for Native Location Module
 *
 * This plugin configures the native location module for both iOS and Android.
 * It adds the necessary permissions and configurations to the native projects.
 */

const withLocationPermissions = (config) => {
  // iOS: Add location permission to Info.plist
  config = withInfoPlist(config, (config) => {
    config.modResults.NSLocationWhenInUseUsageDescription =
      config.modResults.NSLocationWhenInUseUsageDescription ||
      'This app needs access to location for tracking points.';

    config.modResults.NSLocationAlwaysAndWhenInUseUsageDescription =
      config.modResults.NSLocationAlwaysAndWhenInUseUsageDescription ||
      'This app needs access to location for tracking points.';

    return config;
  });

  // Android: Add location permissions to AndroidManifest.xml
  config = withAndroidManifest(config, (config) => {
    const androidManifest = config.modResults.manifest;

    // Ensure uses-permission array exists
    if (!androidManifest['uses-permission']) {
      androidManifest['uses-permission'] = [];
    }

    // Add location permissions if not already present
    const permissions = [
      'android.permission.ACCESS_FINE_LOCATION',
      'android.permission.ACCESS_COARSE_LOCATION',
    ];

    permissions.forEach((permission) => {
      if (!androidManifest['uses-permission'].some(p => p.$['android:name'] === permission)) {
        androidManifest['uses-permission'].push({
          $: { 'android:name': permission },
        });
      }
    });

    return config;
  });

  return config;
};

module.exports = withLocationPermissions;
