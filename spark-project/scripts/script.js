/**
 * (c) Facebook, Inc. and its affiliates. Confidential and proprietary.
 */

//==============================================================================
// Welcome to scripting in Spark AR Studio! Helpful links:
//
// Scripting Basics - https://fb.me/spark-scripting-basics
// Reactive Programming - https://fb.me/spark-reactive-programming
// Scripting Object Reference - https://fb.me/spark-scripting-reference
// Changelogs - https://fb.me/spark-changelog
//
// For projects created with v87 onwards, JavaScript is always executed in strict mode.
//==============================================================================

// How to load in modules
const Scene = require('Scene');

// Use export keyword to make a symbol available in scripting debug console
export const Diagnostics = require('Diagnostics');

// spark-ar modules
const Textures = require('Textures');
const Materials = require('Materials');
const FaceTracking = require('FaceTracking');
const Animation = require('Animation');
const Reactive = require('Reactive');
const TouchGestures = require('TouchGestures');
const Instruction = require('Instruction');

// Enables async/await in JS [part 1]
(async function() {

  const face = FaceTracking.face(0);
  const [body] = await Promise.all([
    Scene.root.findFirst('body')
  ]);

  const bodyTransform = body.transform;
  const faceTransform = face.cameraTransform;

  const factor = 80;

  bodyTransform.rotationX = faceTransform.rotationX.mul(-1.0).sum(0).expSmooth(factor);
  bodyTransform.rotationY = faceTransform.rotationZ.mul(1.0).sum(0).expSmooth(factor);
  bodyTransform.rotationZ = faceTransform.rotationY.mul(-1.0).sum(0).expSmooth(factor);

})();
