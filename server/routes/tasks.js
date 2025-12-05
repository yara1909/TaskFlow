import express from 'express';
import { supabase } from '../db/supabaseClient.js';

const router = express.Router();

router.post("/", async (req, res) => {
  const { title, description, status } = req.body;

  const { data, error } = await supabase
    .from("tasks")
    .insert([{ title, description, status }])
    .select();

  if (error) return res.status(500).json({ error: error.message });

  res.json(data); 
});


router.get("/", async (req, res) => {
  const { data, error } = await supabase.from("tasks").select();
  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
});

router.delete("/:id", async(req, res) => {
  const {id} = req.params; 
  const {data, error} = await supabase
    .from("tasks")
    .delete()
    .eq("id", id)
    .select();

  if (error) return res.status(500).json({ error:error.message });

  res.json({ success: true });
});

export default router;