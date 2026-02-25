# Sprinklr AI+ Studio

> Source: https://www.sprinklr.com/products/platform/ai-plus-studio/ and https://www.sprinklr.com/help/categories/ai-studio/66963dd5a696c73557cc730e

## What is AI+ Studio?

AI+ Studio is Sprinklr's **central AI management layer** — a single interface to govern, configure, and deploy all GenAI-powered capabilities across the entire Sprinklr platform. It gives enterprises full visibility and control over what their AI is doing, why, and how to make it more relevant at every step.

**Tagline:** "Harness enterprise-ready GenAI within Sprinklr. Transparent, governed, yours."

## Core capabilities

### 1. Model & Provider Management

Choose from a wide range of AI providers and models — all managed from one place:

- **OpenAI** (GPT-4o, GPT-4, etc.)
- **Azure OpenAI**
- **Amazon Bedrock**
- **Google Vertex AI** (Gemini)
- **Anthropic** (Claude)
- **xAI** (Grok)
- **Adobe Firefly** (image generation)
- **BYOM** — Bring Your Own Model (proprietary enterprise models)
- **BYOK** — Bring Your Own Key (use existing vendor credits)
- **Sprinklr in-house LLMs** (built on Mistral, Qwen, Falcon, Llama)

**Key insight:** Sprinklr is "model-dynamic" not "LLM-agnostic." A single use case can route different tasks to different models — the best-fit model per function. E.g. Product Insights workflow uses multiple AI types, providers, and models in one pipeline.

### 2. Prompt Engineering & Configuration

- Create or edit prompts for any Sprinklr AI+ use case
- Configure hyperparameters (temperature, top-p, top-k)
- Add brand-specific examples and fine-tune per use case
- Test prompt outputs before deploying live
- Version-control prompt changes

### 3. AI Workflows (Scalable Orchestration)

- Build multi-step AI pipelines via intuitive workflow builder
- Scale across any dimension: countries, languages, brands, business units, teams
- Orchestrate multiple models in a single workflow, each task routed to best-fit AI
- Edit existing workflows or create new ones without engineering support

### 4. Security, Compliance & Guardrails

- **PII Masking**: AI-powered or keyword-based detection of personally identifiable information; mask before sending to LLMs
- **Input guardrails**: Filter harmful, toxic, or off-topic user inputs before they reach the AI
- **Output guardrails**: Prevent harmful, hallucinated, or non-compliant content from reaching users
- **Data encryption**: TLS 1.2 in transit, AES-256 at rest
- **Audit logs**: Full history of AI decisions, actions, and outputs
- **Usage monitoring**: Dashboards to track AI adoption and performance per use case

### 5. Feature Access Management

- **Feature-level control**: Enable/disable specific AI features per team, role, or business unit
- **Global-level control**: Org-wide AI policy settings and overrides

### 6. AI Agents Management

- Deploy and manage Sprinklr AI Agents from AI+ Studio
- Configure agent identity, knowledge, tasks, and tools
- Monitor agent performance via admin panel
- See audit logs for every agent action

### 7. AI Copilot Management

- Configure copilots for Marketing, Service, Social, Insights, Platform teams
- Manage copilot context and capabilities per workflow

### 8. Use-Case Deployments

- **Supported list of use cases**: Pre-built AI use cases for each Sprinklr product (Social, Service, Insights, Marketing)
- Deploy with recommended defaults or customize per enterprise needs
- Sprinklr prescribes but never restricts — enterprises can take full control of orchestration

### 9. AI+ Reporting

- Track AI performance metrics across use cases
- Monitor adoption rates, quality scores, and business impact
- Compare model/prompt versions with quantifiable scores

## Key differentiator: "Model-Dynamic Open Platform"

From Sprinklr's blog (Aug 2025): *"The Future of Enterprise AI is Model-Dynamic and Open"*

> "At Sprinklr, we orchestrate AI — a single use case can be powered by multiple models and providers, with each task executed by the best-fit model for that specific function."

Enterprise benefits:
1. **Choose models and providers**: Full flexibility to mix Sprinklr LLMs with any provider
2. **Own your prompt engineering**: Edit instructions, examples, hyperparameters
3. **Orchestrate scalable AI workflows**: Multi-model pipelines at global scale
4. **Fine-tune and BYOM/BYOK**: Bring your own models or keys
5. **Guardrails and compliance**: Enterprise-grade safety controls
6. **Auditability**: Usage logs, feedback tracking, monitoring dashboards

## Responsible AI — 7-step QA process

All Sprinklr AI models pass through a 7-step QA process before deployment:
1. Impact assessment (bias, fairness, trust)
2. Data validation (PII masking, open-source datasets)
3. Model testing (accuracy, relevance, groundedness)
4. Security audit (code and infrastructure)
5. Prompt safety validation (input/output guardrails)
6. Human review (200+ annotation team)
7. Continuous monitoring post-deployment

## Emplifi Cortex parallels

| Sprinklr AI+ Studio | Emplifi Cortex (prototype) |
|---|---|
| Central AI governance layer | Cortex as AI assistant overlay |
| Model/provider selection | Single AI backend (Fuel) |
| Prompt management UI | Not yet built |
| Guardrails and PII masking | Not yet implemented |
| AI+ Reporting | Not yet built |
| Feature-level control | Basic on/off (planned) |

**Opportunity for Emplifi:** AI+ Studio is the enterprise governance layer Emplifi needs to build to compete at the enterprise level. Cortex is the right prototype foundation.
