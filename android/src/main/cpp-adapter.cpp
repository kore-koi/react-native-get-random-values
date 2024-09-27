#include <jni.h>

#include "Sodium.hpp"
#include <NitroModules/HybridObjectRegistry.hpp>

JNIEXPORT jint JNICALL JNI_OnLoad(JavaVM* vm, void*) {

  using namespace margelo::nitro;
  HybridObjectRegistry::registerHybridObjectConstructor(
    "Sodium", []() -> std::shared_ptr<HybridObject> { return std::make_shared<Sodium>();
  });

  return JNI_VERSION_1_2;
}
