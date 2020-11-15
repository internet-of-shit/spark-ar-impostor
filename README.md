# Spark AR Among Us Face Filter
<img src="https://github.com/internet-of-shit/spark-ar-impostor/blob/master/filtericon.png" height="140">
<!-- pshh. change in the url the repository link to your own -->

Instagram Filter to turn you into an impostor from the game Among Us.

IT'S LIVE!
https://www.instagram.com/ar/1233958103653576/ 

It's actually quite complex. It features:
* Bone based "neck"-bending
* Randomized "You are Crewmate/Impostor" mini game
* Switching Material color on tap of the body
* tricky handling of transparency, so your actual face glimmers trough the helmet. And custom background stuff

## Handy Links
[Spark AR Docs](https://sparkar.facebook.com/ar-studio/learn/documentation/guides/)

### Quickstart

#### I don't need to script

OK then. You'll find a nice folder structure for your project, already filled with the original Spark AR Assets! 
Just save your Spark Project inside "/spark-project/" and have fun!

#### I actually want to script

1. ```npm install``` to install the depencies. 
Use npm to install other plugins. 

2. Do your magic in ```/scripts/script.js```.

3. ```npm run dev``` will watch for changes and copy automagical to ```/spark-project/scripts/```

4. ```npm run build``` will bundle your script, minimize it and paste it to ```/spark-project/scripts/```
