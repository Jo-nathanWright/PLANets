import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class MultispeciesService {
  async getAll(query = {}) {
    return await dbContext.Multispecies.find(query)
  }

  async getById(id) {
    const species = await dbContext.Multispecies.findById(id)
    if (!species) {
      throw new BadRequest('Invalid Species Id')
    }
    return species
  }

  async create(body) {
    return await dbContext.Multispecies.create(body)
  }

  async destroy(id) {
    await this.getById(id)
    return await dbContext.Multispecies.findByIdAndDelete(id)
  }
}

export const multispeciesService = new MultispeciesService()
