# Flow Automations

Flow Automations are currently in early access. If you are interested in joining the program, please contact your CSM.

Emplifi Flow Automations are configurable automation flows powered by the Emplifi Platform Intelligence Engine. Each flow is represented as a flowchart with at least one trigger node and one action node, while condition nodes are optional.

Flow Automations are available for only Community, Care cases, and Care messages.

Use Flow Automations to automate complex content operations according to your business needs. Consider the following examples:

- You can create flows to escalate incoming Community messages to Care, set their case priority, and respond with automatic messages.
- You can create flows for Community that send automatic replies when a new message arrives or when a specific content label is applied to a message.
- You can create flows for Care that update case fields and case priorities whenever the sentiment of a case changes.

Each flow can manage branching, multiple triggers, conditions, and actions. Also, the actions of one flow can cause the triggers of another flow to react on your account. This allows you to automate complex use cases.

## Flow Automations Homepage

Only Administrators can access the Flow Automations homepage.

By default, the Flow Automations homepage (Settings → Automation → Flow Automations) lists all of the flows that have been created within your account.

You can use the search to find flows by their name or content source (for example, search for care or community).

The following details are available in a table on the Flow Automations homepage:

When a user does not have permission for a resource within a flow, they see a View-only badge next to the name of the flow. Until that user has permissions for the resource, they are unable to edit or change the state of the flow.

- **Flow name** - The name of the flow and a clickable link to the flow canvas.
- **State** - The switch to turn the flow on or off. Active (flow is turned on), Inactive (flow is turned off; default for new flows).
- **Status** - Inactive (flow is turned off and not running), Active (flow is turned on and running without errors), Invalid (flow is turned off and in Inactive state because it contains critical errors; cannot have Active state until errors are fixed).
- **Content Source** - Care cases, Care messages, or Community messages.
- **Last edit by** - The name and date of the last user to edit or change the flow state.

### Filter

The filter lets you narrow the flows table on the Flow Automations homepage based on which components a flow uses. For example, you can filter for flows that include the Community Label Content Action. The filter matches the component only. You can't filter by component configuration details, such as which profiles are selected or which content labels are applied.

## Next steps

Before you start designing your flows, we recommend that you dedicate your time and effort to understand the user interface, flow components, and the underlying logic behind Flow Automations.

- [Flow Automations Components Overview](https://docs.emplifi.io/platform/latest/home/flow-automations-components-overview)
- [Flow Canvas Overview](https://docs.emplifi.io/platform/latest/home/flow-canvas-overview)
- [Create a Flow](https://docs.emplifi.io/platform/latest/home/create-a-flow)
- [Flow Activation Examples](https://docs.emplifi.io/platform/latest/home/flow-activation-examples)
- [Community Flow Automations Reference](https://docs.emplifi.io/platform/latest/home/community-flow-automations-reference)
- [Care Cases Flow Automations Reference](https://docs.emplifi.io/platform/latest/home/care-cases-flow-automations-reference)
- [Care Messages Flow Automations Reference](https://docs.emplifi.io/platform/latest/home/care-messages-flow-automations-reference)

## Flow Automations Components Overview

Because flows are visualized as flow charts, the terminology used to describe a flow shares many similarities with the terminology used to discuss flow charts. However, even if you are familiar with how flow charts are constructed, it is still recommended that you read this information to ensure you have a complete understanding of Flow Automations.

In Flow Automations, you use the following node components to construct your flow:

- **Trigger Nodes and Elements** (required) - WHEN statements that start the flow. Trigger nodes contain trigger elements. The first node of any flow is always a trigger node.
- **Condition Nodes and Elements** (optional) - IF statements that filter which content is processed within the flow. Condition nodes contain condition elements.
- **Action Nodes and Elements** (required) - THEN statements that produce a result within the flow. An action node can contain a single action element.

By default, new nodes that you add to the flow are automatically connected together with a base edge (line) to form parent and child relationships.

There are three types of edge components you can use to construct your flow:

- **Base Edge** - The default edge. Starting from the root trigger node, unless you choose a different edge, a base edge automatically connects each new node component you add to the flow.
- **Branch Edge** - The branch edges direct flows to different actions based on conditions. Branches can be drawn after any of the nodes.
- **Else Branch Edge** - The else branch edge connects one condition node to another condition or action node and activates only when the parent condition node does not apply. The else branch edge is used to create more complex conditional logic within your flow.

## Flow Canvas Overview

The flow canvas is where you add components to create your flow and edit existing flows. You can also disconnect sections of your flow content from processing through those sections.

In order to save your flow, you must link together at least one trigger node and one action node. While condition nodes are optional elements, more complex flows can be achieved only with the inclusion of conditions.

We recommend that you read the Flow Automations Components Overview, Flow Activation Examples, and the Flow Automations Reference articles before designing your first flow.

### View-only

When a user does not have access to one or more resources within a flow, they are able to view the flow components but they are unable to change the flow parameters.

### Description & notes

The description of the flow is accessible directly within the canvas editor. Any change to the description here will also update the description of the flow on the Flow automations home page.

### Navigation

To move the canvas itself, click and hold the canvas background to drag the canvas to the position you want.

You can use the canvas controls to:

- **Zoom in** - Increase the size of the flow's components.
- **Zoom out** - Decrease the size of the flow's components.
- **Zoom to fit (center the canvas)** - Center the canvas and change the size of components relative to the size of the screen and overall flow.
- **Lock / Unlock** - Lock the flow canvas to prevent editing of components. Unlock to edit.
- **Edit name** - Edit the flow name and description.
- **Undo / Redo** - Undo or redo your interactions within the canvas editor.
- **Save** - Save the flow. If the flow is already activated, the changes are also immediately activated.

It is important that you understand how your flow should operate before you activate your flow or introduce changes into an active flow. It's not possible to undo the actions of your flow once the flow is activated. Whenever you're unsure of how the flow will perform, consider disconnecting nodes from the flow before saving changes.

### Add a component

1. Click Add component.
2. Select the component you want to add to the flow. The choices available are contextual.

### Component options

When you hover your cursor over an edge (the blue/gray line/arrow between nodes), additional component options are available:

- **Add a component** - Adds a condition node, action node, branch, or else branch to the flow.
- **Disconnect/Restore branch** - Disables or restores processing for connected components below the edge. Disconnected branches are grayed out and indicated by the yellow disconnected icon. After adding a component to a currently active flow, you can disconnect the components before saving to have a "draft" of your flow design.
- **Transform (contextual)** - Transform options change the layout of the flow. Transform to else branch (available only for the edge below a condition node that does not already have an else branch). Transform to branch (available only for else branch edges).
- **Remove branch** - Deletes the edge and all the connected components directly below the edge.

### Add elements to a node

1. Click Add trigger, Add Condition, or Add action. The element panel opens on the left with more options.
2. Select and configure the element. The available elements depend on the node type and content source. When adding an element, you can click Back or the Go back arrow to return to the list of elements you can add to the node. Alternatively, you can click Clear to remove all selections from the current element.
3. Click Add trigger, Add Condition, or Add action to confirm your configuration and add the element to the node.

### Edit elements in a node

To edit the elements within a node, click on the element. The elements panel opens and you can change the parameters of the current element. You can also remove an element by hovering over the element in a node and clicking the trashcan (Remove). Click the back button or arrow in the elements panel to change the element to a different one.

### Move a node or element

You can rearrange nodes and elements along and between branches in the canvas editor. Elements can only be moved to compatible node types. For example: You can drag a condition element from one condition node to another condition node. You can reorder trigger elements or condition elements within their respective nodes. You can drag a condition node, including all of its elements to another place in the flow. You can drag an action node to another place in the flow.

### Node options

When you hover over a condition node or an action node, you have the following options:

- **Duplicate** - Creates a child node using the same contents as the duplicated node.
- **Remove Condition/Action** - Deletes the node from the canvas. This option is not available for the trigger node.

## Create a Flow

Before you create your first flow, read the Flow Automations Components Overview and Flow Canvas Overview to learn about the different parts of a flow and how to use the editor.

Only administrators can create a flow.

Before activating your flow, make sure you read and understand the Flow Activation Examples.

Consider the following information in advance:

- Which content source the flow should work with
- What data from the content source the flow should process
- What the flow should achieve (the outcome of the actions)

Steps:

1. From Automation → Flow Automations, click Create flow. A setup window appears.
2. Name your flow and add a description that allows other users on your team to identify what it does. This description will also appear within the canvas editor.
3. Select the content source. The source cannot be changed after you create the flow.
   - Community messages
   - Care cases
   - Care messages
4. Click Create flow. The flow opens to the canvas editor.

## Flow Activation Examples

Flow Automations start working from the moment that you activate a flow.

### What should I know before I activate a flow?

If Community or Care content is changed in a way that matches the event defined within your flow's trigger, it will be processed. As a result:

- The actions of Flow A may trigger Flow B.
- Previously unprocessed content can be processed depending on your triggers. For example, if someone manually adds a content label that is a trigger for processing to a piece of content, that piece of content can be processed.

### What happens when I activate a flow?

Flow Automations process content based on the definitions and logic options of nodes and individual elements within your flow.

After activation, Flow Automations are always triggered by a specific event in time over a piece of content that fits the event defined in the trigger node.

Only content that has received enrichment data (for example, language or sentiment) can be processed by Flow Automations.

Because the flow triggers can only react after the flow is activated, Flow Automations cannot process historical data in the same way as rule-based labeling does. However, older content will be processed if it is changed in a way that triggers a reaction from the flow after the flow is enabled.

The definitions of the individual elements inside your flow are configured within nodes, and the definitions filter content for processing. Examples of definitions include the name of labels, profiles, message statuses or keywords.

The logic options for the individual elements inside your flow are configured within nodes and elements. Examples of logic options include is any of, is all of, and is none of.

The direction of processing is determined by the order of the elements within individual nodes and the edges that connect different nodes together. Processing always starts from the root node and flows according to the placement of your edges, children nodes, and the individual elements within the nodes.

### Example: New message, Incoming message

If you activate a flow with incoming Community messages as the trigger on February 1 at 3pm, it will only process messages created after February 1, 3pm.

Any message arriving after 3pm on February 1, causes the flow trigger to react.

If the message contains `apple pie`, or `lemon meringue`, or `baking pies`…. it will be labeled `Pie`.

Messages that were created on January 31 that year will not be processed because the defined event is an incoming message. Only messages created after the flow was activated are eligible for processing.

### Example: Content labels set

In this example, the flow is activated on February 1 at 3pm.

After 3pm on February 1, the flow trigger reacts when someone or some other automation process applies the `_BB edit` label to a piece of content from your data source. This could include content that entered your system after you enable the flow or content that already existed within your system.

If the content contains `apple pie`, or `lemon meringue`, or `baking pies`…. it will be labeled `Pie`.

## Community Flow Automations Reference

This section provides a list of the triggers, conditions, and actions that are currently available for Community Flow Automations.

- [Community Flow Triggers](https://docs.emplifi.io/platform/latest/home/community-flow-triggers)
- [Community Flow Conditions](https://docs.emplifi.io/platform/latest/home/community-flow-conditions)
- [Community Flow Actions](https://docs.emplifi.io/platform/latest/home/community-flow-actions)

## Care Cases Flow Automations Reference

This section provides a list of the triggers, conditions, and actions that are currently available for Care Cases Flow Automations.

- [Care Cases Flow Triggers](https://docs.emplifi.io/platform/latest/home/care-cases-flow-triggers)
- [Care Cases Flow Conditions](https://docs.emplifi.io/platform/latest/home/care-cases-flow-conditions)
- [Care Cases Flow Actions](https://docs.emplifi.io/platform/latest/home/care-cases-flow-actions)

## Care Messages Flow Automations Reference

At this point in early access, only Emplifi Professional Services can create flows for Care messages.

This section provides a list of the triggers, conditions, and actions that are currently available for Care Messages Flow Automations.

- [Care Messages Flow Triggers](https://docs.emplifi.io/platform/latest/home/care-messages-flow-triggers)
- [Care Messages Flow Conditions](https://docs.emplifi.io/platform/latest/home/care-messages-flow-conditions)
- [Care Messages Flow Actions](https://docs.emplifi.io/platform/latest/home/care-messages-flow-actions)
