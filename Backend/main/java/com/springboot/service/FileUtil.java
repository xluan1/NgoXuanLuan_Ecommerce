package com.springboot.service;

import java.nio.file.Path;
import java.nio.file.Paths;

public final class FileUtil {
	private FileUtil() {
	    // restrict instantiation
	  }

	  public static final String folderAvatarPath =  "D:/NgoXuanLuan/NgoXuanLuan-alystyle/public/assets/images/avatars";
	  public static final Path filePath = Paths.get(folderAvatarPath);
}
