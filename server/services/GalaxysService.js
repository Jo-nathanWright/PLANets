import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class GalaxysService {
  async getAll(query = {}) {
    return await dbContext.Galaxys.find(query)
  }

  async getById(id) {
    const galaxy = await dbContext.Galaxys.findById(id)
    if (!id) {
      throw new BadRequest('Invalid Galaxy Id')
    }
    return galaxy
  }

  async create(body) {
    return await dbContext.Galaxys.create(body)
  }

  async destroy(id) {
    await this.getById(id)
    return await dbContext.Galaxys.findByIdAndDelete(id)
  }
}

export const galaxysService = new GalaxysService()
