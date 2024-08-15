# Crop video w/ audio

## Crop video using cuda acceleration (`-hwaccel cuvid`)
Pass the `-crop` flag with margins: top x bottom x left x right.
For example, given input video width 1280px and height 640px, to crop the rectangle bounded by lines 50px from top and bottom side, 430px from right side, and left side of original video, use the command below:
```sh
ffmpeg -y -hwaccel cuvid -c:v h264_cuvid -crop 50x50x0x430 -i input.mp4 -c:v h264_nvenc output.mp4
```

## Crop video without cuda acceleration
Crop the video with input https://video.stackexchange.com/a/4571
```sh
ffmpeg -i input.mp4 -filter:v "crop=out_w:out_h:x:y" out.mp4
```
Where the options are as follows:
- `out_w` is the width of the output rectangle
- `out_h` is the height of the output rectangle
- `x` and `y` specify the top left corner of the output rectangle (coordinates start at (0,0) in the top left corner of the input)

For example, to crop the rectangle bounded by lines 50px from top and bottom side, 430px from right side, and left side of original video, use the command below:
```sh
ffmpeg -i input.mp4 -filter:v "crop=850:540:0:50" out.mp4
```

NOTE: The top & bottom, left & right margin values should not conflict. For example, for a video of 300px height, when crop top margin = 200px, bottom margin cannot be more than 300-200 = 100px. Otherwise, the output will be an empty video file.