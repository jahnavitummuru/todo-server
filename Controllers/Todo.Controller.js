import Project from "../Models/Todo.js";

export const getRecords = async (req, res) => {
  try {
    const record = await Project.find();
    res.json(record);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch records" });
  }
};

export const getRecord = async (req, res) => {
  try {
    const record = await Project.findById(req.params.id);
    if (!record) {
      res.status(404).json({ error: "Record not found" });
    } else {
      res.json(record);
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch record" });
  }
};

export const createRecord = async (req, res) => {
  try {
    const record = new Project(req.body);
    await record.save();
    res.status(201).json(record);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to create record", message: error.message });
  }
};

export const updateRecord = async (req, res) => {
  try {
    const record = await Project.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!record) {
      res.status(404).json({ error: "Record not found" });
    } else {
      res.json(record);
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to update record" });
  }
};

export const deleteRecord = async (req, res) => {
  try {
    const record = await Project.findByIdAndDelete(req.params.id);
    if (!record) {
      res.status(404).json({ error: "Record not found" });
    } else {
      res.status(204).json(record);
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to delete record" });
  }
};
