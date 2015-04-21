json.array! @topics do |topic|
  json.id topic.id.to_s
  json.title topic.title
  json.description topic.description
end