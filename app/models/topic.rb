class Topic
  include Mongoid::Document
  include Mongoid::Timestamps

  field :title
  field :description
end
