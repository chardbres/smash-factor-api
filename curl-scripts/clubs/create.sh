#!/bin/bash

API="http://localhost:4741"
URL_PATH="/clubs"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "club": {
      "style": "'"${STYLE}"'",
      "brand": "'"${BRAND}"'",
      "loft": "'"${LOFT}"'",
      "stiffness": "'"${STIFFNESS}"'"
    }
  }'

echo
