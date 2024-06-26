#include <jni.h>
#include "react-native-get-random-values.h"

extern "C"
JNIEXPORT jdouble JNICALL
Java_com_getrandomvalues_GetRandomValuesModule_nativeMultiply(JNIEnv *env, jclass type, jdouble a, jdouble b) {
    return getrandomvalues::multiply(a, b);
}
