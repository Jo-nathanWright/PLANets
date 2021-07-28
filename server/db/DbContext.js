import GalaxySchema from '../models/Galaxy'
import StarSchema from '../models/Star'
import PlanetSchema from '../models/Planet'
import MoonSchema from '../models/Moon'
import SpeciesSchema from '../models/Species'
import mongoose from 'mongoose'

class DbContext {
  Galaxys = mongoose.model('Galaxy', GalaxySchema);
  Stars = mongoose.model('Star', StarSchema);
  Planets = mongoose.model('Planet', PlanetSchema);
  Moons = mongoose.model('Moon', MoonSchema);
  Multispecies = mongoose.model('Species', SpeciesSchema);
}

export const dbContext = new DbContext()
