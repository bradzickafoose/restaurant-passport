const router = require("express").Router();
const Cities = require("./cities-model");
const { authenticate } = require("../users/restrict-middleware");

router.get("/", authenticate, (req, res) => {
  // pull from cities table - get a list of cities
  Cities.getCities()
    .then(cities => {
      res.status(200).json(cities);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.get("/:id", authenticate, (req, res) => {
  const id = req.params.id;

  Cities.getCityById(id)
    .then(city => res.status(200).json(city))
    .catch(error => res.status(500).json({ error }))
})

router.post("/", (req, res) => {
  // posts to cities
  Cities.addCity(req.body)
    .then(ids => {
      const { name } = req.body;
      res.status(200).json(`You added ${name}.`);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.post("/restaurants", authenticate, (req, res) => {
  // posts to restaurants
  Cities.addRestaurant(req.body)
    .then(ids => {
      res.status(200).json(ids);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.get("/:id/restaurants", authenticate, (req, res) => {
  // object containing city with associated restaurants
  const { id } = req.params;
  Cities.getCityById(id).then(city => {
    console.log("city", city);
    Cities.getRestaurants(city.id)
      .then(restaurants => {
        console.log(restaurants);
        res.status(200).json({ id: city.id, name: city.name, restaurants: restaurants });
      })
      .catch(error => {
        res.status(500).json(error);
      });
  });
});

router.get("/restaurants/:id", authenticate, (req, res) => {
  const id = req.params.id;
  Cities.getRestaurantById(id)
    .then(restaurant => {
      res.status(200).json(restaurant);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.put("/restaurants/:id", authenticate, (req, res) => {
  const id = req.params.id;
  const rating = req.body.rating; 

  if (isNaN(parseInt(rating))) {
    return res.status(400).json({ message: 'not a valid rating'});
  }

  if (rating < 1 || rating > 5) { 
    return res.status(400).json({ message: 'rating must be between 1 and 5' });
  }

  Cities.rateRestaurant(id, rating)
    .then(restaurant => {
      res.status(200).json(restaurant);
    })
    .catch(error => {
      res.status(500).json({ error });
    });
})

router.delete("/restaurants/:id", authenticate, (req, res) => {
  const id = req.params.id;

  Cities.getRestaurantById(id)
    .delete()
    .then(() => {
      res.status(200).json({ message: 'deleted restaurant successfully' })
    })
    .catch(error => res.status(500).json({ message: error.message }))
})


module.exports = router;
