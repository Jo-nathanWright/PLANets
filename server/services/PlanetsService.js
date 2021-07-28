import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class PlanetsService {
  async getAll(query = {}) {
    return await dbContext.Planets.find(query)
  }

  async getById(id) {
    const planet = await dbContext.Planets.findById(id)
    if (!planet) {
      throw new BadRequest('Invalid Planet Id')
    }
    return planet
  }

  async create(body) {
    return await dbContext.Planets.create(body)
  }

  async destroy(id) {
    await this.getById
    return await dbContext.Planets.findByIdAndDelete(id)
  }
}

export const planetsService = new PlanetsService()
