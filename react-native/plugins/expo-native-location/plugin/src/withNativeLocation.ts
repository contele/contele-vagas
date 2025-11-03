import { ConfigPlugin, withInfoPlist, withAndroidManifest } from '@expo/config-plugins';

/**
 * Expo Config Plugin para adicionar permissões de localização
 * Este plugin configura as permissões necessárias no iOS e Android
 */
const withNativeLocation: ConfigPlugin = (config) => {
  // Configura iOS
  config = withInfoPlist(config, (config) => {
    config.modResults.NSLocationWhenInUseUsageDescription =
      config.modResults.NSLocationWhenInUseUsageDescription ||
      'This app needs access to your location for tracking.';

    config.modResults.NSLocationAlwaysUsageDescription =
      config.modResults.NSLocationAlwaysUsageDescription ||
      'This app needs access to your location even when not in use for background tracking.';

    config.modResults.NSLocationAlwaysAndWhenInUseUsageDescription =
      config.modResults.NSLocationAlwaysAndWhenInUseUsageDescription ||
      'This app needs access to your location for tracking purposes.';

    return config;
  });

  // Configura Android
  config = withAndroidManifest(config, (config) => {
    const androidManifest = config.modResults.manifest;

    // Adiciona permissões
    if (!androidManifest.$ || !androidManifest['uses-permission']) {
      androidManifest['uses-permission'] = [];
    }

    const permissions = [
      'android.permission.ACCESS_FINE_LOCATION',
      'android.permission.ACCESS_COARSE_LOCATION',
    ];

    permissions.forEach((permission) => {
      if (
        !androidManifest['uses-permission'].find(
          (p: any) => p.$?.['android:name'] === permission
        )
      ) {
        androidManifest['uses-permission'].push({
          $: { 'android:name': permission },
        });
      }
    });

    return config;
  });

  return config;
};

export default withNativeLocation;
