/**
 * Copyright (c) 2012 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 **/

function onLaunched(launchData) {
  chrome.app.window.create('main.html', {
    width: 600,
    height: 600,
	type: 'panel'
  });
}

chrome.app.runtime.onLaunched.addListener(onLaunched);


chrome.storage.local.set({'source_script': 'http://bart.local/source.php'});
