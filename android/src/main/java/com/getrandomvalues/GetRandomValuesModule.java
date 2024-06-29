package com.getrandomvalues;

import androidx.annotation.NonNull;
import android.util.Log;
import androidx.annotation.Nullable;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.module.annotations.ReactModule;
import com.facebook.react.bridge.JavaScriptContextHolder;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReactContextBaseJavaModule;

@ReactModule(name = GetRandomValuesModule.NAME)
public class GetRandomValuesModule extends ReactContextBaseJavaModule {
  public static final String NAME = "GetRandomValues";

  public GetRandomValuesModule(ReactApplicationContext reactContext) {
    super(reactContext);
  }

  @Override
  @NonNull
  public String getName() {
    return NAME;
  }

  private static native void nativeInstall(long jsiPt);

  @ReactMethod(isBlockingSynchronousMethod = true)
  public boolean install() {
    try {
      Log.i(NAME, "Loading C++ library...");
      System.loadLibrary("react-native-get-random-values");

      JavaScriptContextHolder jsContext = getReactApplicationContext().getJavaScriptContextHolder();
      nativeInstall(jsContext.get());
      Log.i(NAME, "Successfully installed JSI Bindings");
      return true;
    } catch (Exception exception) {
      Log.e(NAME, "Failed to install JSI Bindings", exception);
      return false;
    }
  }
}
