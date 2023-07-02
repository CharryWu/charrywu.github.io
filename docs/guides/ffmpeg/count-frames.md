# Using FFmpeg to count number of frames

## Use FFmpeg to count number of frames, fastly and reliably (recommended, works on any video file)
Stackoverflow: https://stackoverflow.com/a/66105349
```bash
ffmpeg -i input.mp4 -map 0:v:0 -c copy -f null -
```
The FFmpeg command loops through the video file but do not decode any frames. It only increments the counter, thus it's very fast.

## Use FFprobe, output frame count only
Stackoverflow: https://stackoverflow.com/a/28376817
```bash
ffprobe -v error -select_streams v:0 -count_packets -show_entries stream=nb_read_packets -of csv=p=0 input.mp4
```
What the ffprobe options mean:
- `-v error` This hides "info" output (version info, etc) which makes parsing easier (but makes it harder if you ask for help since it hides important info).
- `-count_frames` Count the number of packets per stream and report it in the corresponding stream section.
- `-select_streams v:0` Select only the first video stream.
- `-show_entries stream=nb_read_packets` Show only the entry for `nb_read_frames`.
- `-of csv=p=0` sets the output formatting. In this case it hides the descriptions and only shows the value. See FFprobe Writers for info on other formats including JSON.

## Use FFprobe to get frame count from video file metadata
Stackoverflow: https://stackoverflow.com/q/66098161
```bash
ffprobe -select_streams v:0 -show_entries stream=nb_frames -of default=noprint_wrappers=1 input.mp4
```

