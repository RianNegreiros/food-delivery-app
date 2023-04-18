class CreateOrders < ActiveRecord::Migration[6.0]
  def change
    create_table :orders do |t|
      t.string :name
      t.string :phone_number
      t.float :total_value
      t.integer :status
      t.references :restaurant, null: false, foreign_key: true
      t.string :city
      t.string :street
      t.string :neighborhood
      t.string :number
      t.string :complement

      t.timestamps
    end
  end
end