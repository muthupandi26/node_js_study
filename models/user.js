const { ObjectId } = require("mongodb");
const getDb = require("../utils/database").getDb;

class User {
  constructor(userName, email, cart, id) {
    this.name = userName;
    this.email = email;
    this.cart = cart; // {items : []}
    this._id = id;
  }

  save() {
    const db = getDb();
    return db
      .collection("users")
      .insertOne(this)
      .then((result) => console.log(result))
      .catch((err) => {
        console.log(err);
      });
  }

  addToCart(product) {
    // const cartProduct = this.cart.items.findIndex(cp => {
    //   return cp._id === product._id
    // })

    const updatedCart = {items : [{productId :new ObjectId(product._id), quantity : 1}]}
    const db = getDb();
    db.collection('users').updateOne({_id: new ObjectId(this._id,)}, {$set:{cart: updatedCart}})

  }

  static findById(userId) {
    const db = getDb();
    return db
      .collection("users")
      .findOne({ _id: new ObjectId(userId) })
      .then((user) => {
        console.log(user);
        return user;
      })
      .catch((err) => console.log(err));
  }
}

module.exports = User;
