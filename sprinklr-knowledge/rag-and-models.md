# Sprinklr: RAG Architecture & Model-Dynamic Platform

> Sources: https://www.sprinklr.com/blog/how-sprinklr-uses-RAG/  
> https://www.sprinklr.com/blog/enterprise-rag-evaluation/  
> https://www.sprinklr.com/blog/future-of-enterprise-ai/

## What is RAG? (Retrieval-Augmented Generation)

RAG enriches large language models with the ability to fetch factual knowledge from external data sources at query time. Instead of relying solely on training data, the AI retrieves relevant documents and uses them as context for generating responses.

**RAG advantages for enterprise:**
- **Customizability**: Meticulous curation of information sources; align with org standards
- **Trust/Explainability**: AI can cite its sources — improves confidence in accuracy
- **Relevance**: Tap into current data from dynamic sources (social media, news, product catalog)
- **Cost efficiency**: Avoids expensive model retraining; just update the knowledge base

## Sprinklr's RAG Architecture

### AI Search (Retrieval layer)
- Powered by Sprinklr AI for accurate, fast information retrieval
- **Re-ranking strategy**: Re-ranks retrieved documents for relevancy before passing to LLM
- **Hybrid embeddings**: Dense embeddings (semantic similarity) + Sparse embeddings (keyword matching)
- Supports a wide range of data formats

### Knowledge Base (Storage layer)
- Ingests and indexes enterprise content (documents, policies, product info, social data)
- Provides insights to mitigate misinformation
- Customizable prioritization settings for different knowledge bases

### Orchestrator Module
- Transforms AI from information provider to actionable insight generator
- Connects RAG output to downstream actions (tasks, workflows, system updates)

### Customizable Guardrails
- Global settings for user input moderation
- Topic-specific controls for source and content management
- Content generation boundaries

### LLM Provider Flexibility
- Supports in-house, open-source, and enterprise models
- BYOK (Bring Your Own Key): integrate existing vendor agreements
- BYOM (Bring Your Own Model): use proprietary enterprise models
- The system is LLM-provider agnostic at the execution level

## Sprinklr's Automated RAG Evaluation Framework

**Problem:** Manual testing of RAG quality doesn't scale. "Tapping a few queries for sanity-checking is like inspecting a skyscraper with a screwdriver."

**Sprinklr's solution:** Built-in automated RAG Evaluation Framework — systematic, quantifiable quality scoring.

### How it works

1. Team provides test cases: a question + an expected answer
2. Platform runs the question through the full RAG pipeline (retrieval + generation)
3. Framework collects: LLM answer, retrieved context chunks, expected answer
4. Computes 4 quality metrics

### 4 Quality Metrics

| Metric | What it measures | Method |
|--------|-----------------|--------|
| **Groundedness** | Are answers supported by retrieved context? (anti-hallucination) | LLM-judged: does the answer's statements match source documents? |
| **Answer Relevance** | Is the answer complete, helpful, coherent relative to the query? | LLM self-evaluation of completeness and helpfulness |
| **Retrieval Quality** | Were the right documents retrieved? | BERTScore threshold; classifies chunks as relevant/not; measures precision and recall |
| **Overall Score** | How closely does the answer match the expected answer? | BERTScore (semantic similarity via transformer embeddings — goes beyond word overlap) |

### Output: RAG Evaluation Report
- Detailed scores per test case + composite report
- Identify which relevant chunks were missed
- Where the model tripped up
- Comparison across model/prompt versions

### Benefits
- **Faster deployment**: Automated tests replace manual QA; run hundreds of queries in minutes
- **Higher quality agents**: Numeric scores make improvement measurable and data-driven
- **Continuous monitoring**: Can run continuously as data changes; alert on score drops
- **Single-click Auto-evaluation Framework**: Being developed for continuous production monitoring

## Model-Dynamic Platform Philosophy

### The Problem with "LLM-Agnostic"
Sprinklr explicitly rejects the term "LLM-agnostic" — it implies models are interchangeable. They're not. GPT-4o and Gemini 2.5 Pro produce different outputs for the same task.

### Sprinklr's Approach: Model Orchestration
- A single use case can be powered by **multiple models** and providers
- Each task within a workflow is routed to the **best-fit model** for that specific function
- Example (Product Insights workflow): Uses different models for: entity extraction, sentiment analysis, summarization, and action recommendation

### Supported Models & Providers
- **Cloud providers**: OpenAI, Azure OpenAI, Amazon Bedrock, Google Vertex AI (Gemini), Anthropic (Claude), xAI (Grok)
- **Image/creative**: Adobe Firefly
- **Sprinklr in-house LLMs**: Built on Mistral, Qwen, Falcon, Llama (open-source frameworks)
- **BYOM**: Bring Your Own Model (proprietary enterprise models)
- **BYOK**: Bring Your Own Key

### Why this matters for enterprise
1. Innovation flows in both directions — take advantage of next breakthroughs, not bound to last ones
2. Teams don't get trapped in black box — evaluate, select, orchestrate right model per job
3. Maximum ROI from AI — industry-leading models + custom models for specific domains

## Implications for Emplifi

Emplifi's Fuel intelligence layer handles AI inference today. To compete with Sprinklr at enterprise scale, Emplifi needs:

1. **RAG layer**: Index platform data (posts, listening data, reviews, care cases) to ground AI responses in real customer data
2. **Model orchestration**: Route different Cortex tasks to different models (e.g. GPT-4o for generation, a fine-tuned model for Emplifi-specific tasks)
3. **Automated evaluation**: Build quality scoring for Cortex responses to ensure enterprise reliability
4. **Bring Your Own Model**: Allow enterprise customers to use their own approved AI providers
