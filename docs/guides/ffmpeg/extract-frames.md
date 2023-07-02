# FFmpeg extract frames
Wiki: https://trac.ffmpeg.org/wiki/Seeking
```sh
ffmpeg -ss 00:23:00 -i input.mkv -frames:v 1 out1.jpg
```
This command extract a single frame at the exact 23:00 time mark