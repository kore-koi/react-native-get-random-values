#import <React/RCTBridge+Private.h>
#import <React/RCTUtils.h>
#import <jsi/jsi.h>
#import "GetRandomValues.h"
#import "GetRandomValuesHostObject.hpp"

@implementation GetRandomValues
RCT_EXPORT_MODULE()

RCT_EXPORT_BLOCKING_SYNCHRONOUS_METHOD(install)
{
  RCTBridge* bridge = [RCTBridge currentBridge];
  RCTCxxBridge* cxxBridge = (RCTCxxBridge*)bridge;

  if (cxxBridge == nil) {
      return @false;
  }

  using namespace facebook;

  auto jsiRuntime = (jsi::Runtime*) cxxBridge.runtime;
  if (jsiRuntime == nil) {
      return @false;
  }
  auto& runtime = *jsiRuntime;

  auto instance = std::make_shared<GetRandomValuesHostObject>();
  jsi::Object NativeGetRandomValues = jsi::Object::createFromHostObject(runtime, instance);

  runtime.global().setProperty(runtime, "__NativeGetRandomValues", std::move(NativeGetRandomValues));

  return @true;
}

@end
