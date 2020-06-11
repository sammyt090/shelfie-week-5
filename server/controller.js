module.exports ={

    postList: (req,res) => {
        const db = req.app.get('db');

        db.get_inventory()
        .then(products => res.status(202).send(products))
        .catch(err => {
            res.status(500).send(err)
            console.log(err)
        })
        
    },

    grabId: (req, res) => {
        const db = req.app.get('db');
        const {id} = req.params
        db.grab_id(id)
        .then(newId => res.status(202). send(newId))
        .catch(err => {
            res.status(500).send(err)
            console.log(err)
        })
    },

    createList: (req,res) => {
       
    console.log(req.body)
        const db = req.app.get('db');
        const {name, price, img} = req.body;
        
        db.create_product([name, price, img])
        .then(() => res.sendStatus(200))
        .catch(err => {
            res.status(500).send(err)
            console.log(err)
        })
    },


deleteList: (req, res) => {
    const db =req.app.get('db')
    const {id} = req.params;

     db.delete_list(id)
    .then(()=> res.sendStatus(200))
    .catch(err => {
        res.status(500).send(err)
        console.log(err)
    })
},

editList: async (req, res) => {
    const {id} = req.params
    const {name, price, img}= req.body
    const db = req.app.get('db')

    const [updatedProduct] = await db.update_product([
        id, name, price, img
    ])

    if ( updatedProduct ){
       return res.sendStatus(200)
    }
    res.status(500).send('Error encountered') 
}

}