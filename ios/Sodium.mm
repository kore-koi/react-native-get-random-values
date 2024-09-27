#import <NitroModules/HybridObjectRegistry.hpp>
#import "Sodium.hpp"

@interface SodiumOnLoad: NSObject
@end

@implementation SodiumOnLoad

  using namespace margelo::nitro;
+ (void)load {
  HybridObjectRegistry::registerHybridObjectConstructor(
    "Sodium", []() -> std::shared_ptr<HybridObject> { return std::make_shared<Sodium>();
  });
}

@end
