const { Record } = require('../models');

class RecordService {
  constructor(model) {
    this.model = model;
  }
  
  async findByDateAndTotalCount({ startDate, endDate, minCount, maxCount }) {
    return this.model.aggregate([
      {
        $match: {
          createdAt: { $gte: new Date(startDate), $lte: new Date(endDate) }
        }
      },
      {
        $addFields: {
          totalCount: { $sum: "$counts" }
        }
      },
      {
        $match: {
          totalCount: { $gte: minCount, $lte: maxCount }
        }
      },
      {
        $project: {
          '_id': 0,
          value: 0,
          counts: 0
        }
      }
    ]);
  }
}

module.exports = new RecordService(Record);