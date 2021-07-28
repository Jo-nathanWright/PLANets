import BaseController from '../utils/BaseController'
import { multispeciesService } from '../services/MultispeciesService'

export class MultispeciesController extends BaseController {
  constructor() {
    super('api/species')
    this.router
      .get('', this.getAll)
      .get('/:id', this.getById)
      .post('', this.create)
      .delete('/:id', this.destroy)
  }

  async getAll(req, res, next) {
    try {
      const Multispecies = await multispeciesService.getAll(req.query)
      res.send(Multispecies)
    } catch (error) {
      next(error)
    }
  }

  async getById(req, res, next) {
    try {
      const species = await multispeciesService.getById(req.params.id)
      res.send(species)
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      const species = await multispeciesService.create(req.body)
      res.send(species)
    } catch (error) {
      next(error)
    }
  }

  async destroy(req, res, next) {
    try {
      await multispeciesService.destroy(req.params.id)
      res.send({ message: 'That puny Species was Destroyed.' })
    } catch (error) {
      next(error)
    }
  }
}
