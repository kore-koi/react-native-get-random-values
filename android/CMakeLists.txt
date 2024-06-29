cmake_minimum_required(VERSION 3.9.0)
project(GetRandomValues)
set (PACKAGE_NAME "react-native-get-random-values")
set (BUILD_DIR ${CMAKE_SOURCE_DIR}/build)
set (CMAKE_VERBOSE_MAKEFILE ON)
set (CMAKE_CXX_STANDARD 17)

include_directories(
  ../cpp
  "${NODE_MODULES_DIR}/react-native/ReactAndroid/src/main/jni/react/turbomodule"
  "${NODE_MODULES_DIR}/react-native/ReactCommon"
  "${NODE_MODULES_DIR}/react-native/ReactCommon/callinvoker"
  "${NODE_MODULES_DIR}/react-native/ReactCommon/jsi"
  "${NODE_MODULES_DIR}/react-native/ReactCommon/turbomodule/core"
  "${NODE_MODULES_DIR}/react-native/ReactCommon/react/nativemodule/core"
  "${CMAKE_SOURCE_DIR}/../libsodium-android/${CMAKE_ANDROID_ARCH_ABI}/include"
)

find_package(fbjni REQUIRED CONFIG)
find_package(ReactAndroid REQUIRED CONFIG)

add_library(
  ${PACKAGE_NAME}
  SHARED
  ../cpp/GetRandomValuesHostObject.cpp
  ../cpp/TypedArray.cpp
  ../cpp/utils.cpp
  cpp-adapter.cpp
)

find_library(
  LOG_LIB
  log
)

set_target_properties(
  ${PACKAGE_NAME}
  PROPERTIES
  CXX_STANDARD 17
  CXX_EXTENSIONS OFF
  POSITION_INDEPENDENT_CODE ON
)

add_library(sodium SHARED IMPORTED)

set_target_properties(
  sodium
  PROPERTIES
  IMPORTED_LOCATION
  ${CMAKE_SOURCE_DIR}/../libsodium-android/${CMAKE_ANDROID_ARCH_ABI}/lib/libsodium.so
)

target_link_libraries(
  ${PACKAGE_NAME} # <-- our cpp code
  ${LOG_LIB} # <-- logcat
  sodium
  ReactAndroid::jsi # <-- JSI
  android # <-- Android JNI core
  ReactAndroid::turbomodulejsijni
  fbjni::fbjni
  ReactAndroid::reactnativejni
  ReactAndroid::react_nativemodule_core
)
