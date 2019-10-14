class Comment < ApplicationRecord
    validates :author_id, :post_id, :content, presence: true

    belongs_to :post,
        foreign_key: :post_id,
        primary_key: :id,
        class_name: :Post

    belongs_to :author, 
        foreign_key: :author_id, 
        primary_key: :id,
        class_name: :User
end