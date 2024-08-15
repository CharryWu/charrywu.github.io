# Speedup videos w/ audio
Reference: https://superuser.com/a/1394709  
Use complex fileter to speed up video w/ audio, where `<x>` is the speedup ratio
```bash
ffmpeg -i input.mkv -filter_complex "[0:v]setpts=<1/x>*PTS[v];[0:a]atempo=<x>[a]" -map "[v]" -map "[a]" output.mkv
```

For example, if you want to speed up the video by 1.5 times the original speed, use
```bash
ffmpeg -i input.mkv -filter_complex "[0:v]setpts=0.6667*PTS[v];[0:a]atempo=1.5[a]" -map "[v]" -map "[a]" output.mkv
```
