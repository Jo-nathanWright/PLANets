import { moonsService } from '../services/MoonsService'
import { multispeciesService } from '../services/MultispeciesService'
import BaseController from '../utils/BaseController'

export class MoonsController extends BaseController {
  constructor() {
    super('api/moons')
    this.router
      .get('', this.getAll)
      .get('/:id', this.getById)
      .get('/:id/species', this.getSpeciesByMoon)
      .post('', this.create)
      .delete('/:id', this.destroy)
  }

  async getAll(req, res, next) {
    try {
      const moons = await moonsService.getAll(res.query)
      res.send(moons)
    } catch (error) {
      next(error)
    }
  }

  async getById(req, res, next) {
    try {
      const moon = await moonsService.getById(req.params.id)
      res.send(moon)
    } catch (error) {
      next(error)
    }
  }

  async getSpeciesByMoon(req, res, next) {
    try {
      const species = await multispeciesService.getAll({ moonId: req.params.id })
      res.send(species)
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      const moon = await moonsService.create(req.body)
      res.send(moon)
    } catch (error) {
      next(error)
    }
  }

  async destroy(req, res, next) {
    try {
      await moonsService.destroy(req.params.id)
      res.send({ message: 'We destroyed that moon' })
    } catch (error) {
      next(error)
    }
  }
}
