#include <jni.h>
#include <jsi/jsi.h>
#include "GetRandomValuesHostObject.hpp"

using namespace facebook;

void install(jsi::Runtime& jsiRuntime) {
  auto instance = std::make_shared<GetRandomValuesHostObject>();
  jsi::Object NativeRandomValues = jsi::Object::createFromHostObject(jsiRuntime, instance);
  jsiRuntime.global().setProperty(jsiRuntime, "__NativeGetRandomValues", std::move(NativeRandomValues));
}

extern "C"
JNIEXPORT void JNICALL
Java_com_getrandomvalues_GetRandomValuesModule_nativeInstall(JNIEnv *env, jobject clazz, jlong jsiPtr) {
    auto runtime = reinterpret_cast<jsi::Runtime*>(jsiPtr);
    if (runtime) {
      install(*runtime);
    }
}
