import {useEffect, useState} from 'react'

const url = 'https://www.themealdb.com/api/json/v1/1/random.php'


const FoodData = () => {
    const [FoodType, setFoodtype] = useState('')
    const [FoodIMG, setFoodIMG] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const getFoodData = async () => {
      setLoading(true)
      setError(null)
      try {
        const response = await fetch(url)
        if (response.ok) {
          const json = await response.json()
          const mealName = json.meals[0].strMeal
          const mealImage = json.meals[0].strMealThumb
          setFoodtype(mealName)
          setFoodIMG(mealImage)
        } else {
          if (response.status === 429) {
            setError("Too many requests!")
          } else {
            setError("Can't retrieve beer information!")
          }
        }
      } catch (error) {
        setError(error.message)
      }    
      setLoading(false)
    }
  
    return { FoodType, FoodIMG, error, getFoodData, loading }

}

export default FoodData