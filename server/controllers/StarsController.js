import { planetsService } from '../services/PlanetsService'
import { starsService } from '../services/StarsService'
import BaseController from '../utils/BaseController'

export class StarsController extends BaseController {
  constructor() {
    super('api/stars')
    this.router
      .get('', this.getAll)
      .get('/:id', this.getById)
      .get('/:id/planets', this.getPlanetsByStar)
      .post('', this.create)
      .delete('/:id', this.destroy)
  }

  async getAll(req, res, next) {
    try {
      const stars = await starsService.getAll(req.query)
      res.send(stars)
    } catch (error) {
      next(error)
    }
  }

  async getById(req, res, next) {
    try {
      const star = await starsService.getById(req.params.id)
      res.send(star)
    } catch (error) {
      next(error)
    }
  }

  async getPlanetsByStar(req, res, next) {
    try {
      const planets = await planetsService.getAll({ starId: req.params.id })
      res.send(planets)
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      const star = await starsService.create(req.body)
      res.send(star)
    } catch (error) {
      next(error)
    }
  }

  async destroy(req, res, next) {
    try {
      await starsService.destroy(req.params.id)
      res.send({ message: 'We Destroyed that Star' })
    } catch (error) {
      next(error)
    }
  }
}
