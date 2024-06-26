#ifdef __cplusplus
#import "react-native-get-random-values.h"
#endif

#ifdef RCT_NEW_ARCH_ENABLED
#import "RNGetRandomValuesSpec.h"

@interface GetRandomValues : NSObject <NativeGetRandomValuesSpec>
#else
#import <React/RCTBridgeModule.h>

@interface GetRandomValues : NSObject <RCTBridgeModule>
#endif

@end
