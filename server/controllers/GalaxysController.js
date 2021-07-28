import BaseController from '../utils/BaseController'
import { galaxysService } from '../services/GalaxysService'

export class GalaxysController extends BaseController {
  constructor() {
    super('api/galaxys')
    this.router
      .get('', this.getAll)
      .get('/:id', this.getById)
      .post('', this.create)
      .delete('/:id', this.destroy)
  }

  async getAll(req, res, next) {
    try {
      const galaxys = await galaxysService.getAll(req.query)
      res.send(galaxys)
    } catch (error) {
      next(error)
    }
  }

  async getById(req, res, next) {
    try {
      const galaxy = await galaxysService.getById(req.params.id)
      res.send(galaxy)
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      const galaxy = await galaxysService.create(req.body)
      res.send(galaxy)
    } catch (error) {
      next(error)
    }
  }

  async destroy(req, res, next) {
    try {
      await galaxysService.destroy(req.params.id)
      res.send({ message: 'We Destroyed that Galaxy' })
    } catch (error) {
      next(error)
    }
  }
}
