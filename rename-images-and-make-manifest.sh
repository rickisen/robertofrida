#!/bin/bash

for image in public/images/*/*; do
  # add WidthXHeight to name
  # echo "mv $image $(echo "$image-$( mediainfo --Output=JSON $image | jq '[ .media.track[1].Width, "x", .media.track[1].Height ]' | jq -r '.[0,1,2]' | tr -d '\n' )" | sed 's?\.jpg??g').jpg"

  postfix=""
  if expr $( mediainfo --Output=JSON $image | jq '[ .media.track[1].Width, " < ", .media.track[1].Height ]' | jq -r '.[0,1,2]' | tr -d '\n' ) > /dev/null ; then
    postfix="-portrait"
  fi

  mv $image "$( echo "$image""$postfix" | sed 's?\.jpg??g' ).jpg"
done

# echo '{ "images": [""' > image-manifest.json
# for img in public/images/*/*; do
#   echo ",\"/$img\"" >> image-manifest.json
# done
# echo ']}' >> image-manifest.json
