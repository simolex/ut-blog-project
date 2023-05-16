import { FeatureFlags } from '@/shared/types/featureFlags';

let featuresFlags: FeatureFlags; // Фичи не меняются в ходе сессии. Они не реактивные.

export function setFeatureFlags(newFeatureFlags?: FeatureFlags) {
    if (newFeatureFlags) {
        featuresFlags = newFeatureFlags;
    }
}

export function getFeatureFlags(flag: keyof FeatureFlags) {
    return featuresFlags?.[flag] ?? false;
}
