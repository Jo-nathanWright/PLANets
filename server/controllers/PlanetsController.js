import BaseController from '../utils/BaseController'
import { planetsService } from '../services/PlanetsService'
import { moonsService } from '../services/MoonsService'

export class PlanetsController extends BaseController {
  constructor() {
    super('api/planets')
    this.router
      .get('', this.getAll)
      .get('/:id', this.getById)
      .get('/:id/moons', this.getMoonsByPlanet)
      .post('', this.create)
      .delete('/:id', this.destroy)
  }

  async getAll(req, res, next) {
    try {
      const planets = await planetsService.getAll(req.query)
      res.send(planets)
    } catch (error) {
      next(error)
    }
  }

  async getById(req, res, next) {
    try {
      const planet = await planetsService.getById(req.params.id)
      res.send(planet)
    } catch (error) {
      next(error)
    }
  }

  async getMoonsByPlanet(req, res, next) {
    try {
      const moons = await moonsService.getAll({ planetId: req.params.id })
      res.send(moons)
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      const planet = await planetsService.create(req.body)
      res.send(planet)
    } catch (error) {
      next(error)
    }
  }

  async destroy(req, res, next) {
    try {
      await planetsService.destroy(req.params.id)
      res.send({ message: 'We destroyed that planet' })
    } catch (error) {
      next(error)
    }
  }
}
