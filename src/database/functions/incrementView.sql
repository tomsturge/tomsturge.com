CREATE OR REPLACE FUNCTION increment_view(doc_id VARCHAR, article_slug VARCHAR)
RETURNS INTEGER AS $$
DECLARE
  current_views INTEGER;
BEGIN
  INSERT INTO ts_article_views (sanity_document_id, slug, views)
  VALUES (doc_id, article_slug, 1)
  ON CONFLICT (sanity_document_id)
  DO UPDATE SET 
    views = ts_article_views.views + 1,
    last_viewed = NOW();
  
  SELECT views INTO current_views 
  FROM ts_article_views 
  WHERE sanity_document_id = doc_id;
  
  RETURN current_views;
END;
$$ LANGUAGE plpgsql;