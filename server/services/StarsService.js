import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class StarsService {
  async getAll(query = {}) {
    return await dbContext.Stars.find(query)
  }

  async getById(id) {
    const star = await dbContext.Stars.findById(id)
    if (!id) {
      throw new BadRequest('Invalid Star Id')
    }
    return star
  }

  async create(body) {
    return await dbContext.Stars.create(body)
  }

  async destroy(id) {
    await this.getById(id)
    return await dbContext.Stars.findByIdAndDelete(id)
  }
}

export const starsService = new StarsService()
