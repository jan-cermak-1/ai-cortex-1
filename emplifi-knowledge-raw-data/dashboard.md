# Dashboard

The Dashboard module is the analytical hub of the Emplifi platform.

The Dashboard environment allows you to define, create, process, and display data from your social media activities using a single tool.

It comes with a set of pre-defined widgets and dashboard templates so you can start your data analysis right after you connect your social media accounts.

## Templates vs starting from scratch

To create a dashboard, you use a dashboard wizard and use one of the templates or start with a blank dashboard.

When you use a template, you only need to select one of your social media profiles. You can customize your settings later.

When you opt to start from scratch, you start by adding a widget and proceed to customize your dashboard to suit your analytics needs by defining your data sources, filters, and drilling settings.

---

## Create a New Dashboard

While pre-defined dashboards are a convenient way to get a quick visualization of specific data, they barely tap into the full potential of the Emplifi platform analytics.

To build a dashboard, you use widgets. You can think of widgets as predefined metric containers that you can configure to visualize just the data that you are interested in. To learn more, see [Working with Widgets and Metrics in Dashboard](https://docs.emplifi.io/platform/latest/home/working-with-widgets-and-metrics).

One dashboard can contain multiple widgets. You may create dashboard to get the overview of your performance on a single social network, profile, or to see how your videos are doing across multiple platforms.

### Create a dashboard

To create a new dashboard from scratch, follow these steps:

1. Click Add dashboard.
2. Click the Blank dashboard tile.
3. Click Add widget. The list of widgets displays. You can narrow down the list by clicking one of the icons in the filter bar or you can search for the widget directly.
4. Select the widget that you want to use. The widget's configuration page appears.
5. Configure the widget. Example:

Configuration options for individual widgets differ. In general, you can define the following parameters:

- chart type
- widget name
- data source
- filters
- breakdown options
- widget specific options

6. Click Create widget.
7. The widget appears on your dashboard.

To learn how to modify a dashboard, see [Add and Remove a Widget from Dashboard](https://docs.emplifi.io/platform/latest/home/add-and-remove-a-widget-from-dashboard).

### Set the date range

After you create a dashboard, you can define the default data range for all widgets in the dashboards.

Setting the global date range for the dashboard overwrites date range settings in individual widgets.

### Duplicate a dashboard

Assume that you want to have identical dashboards displaying data for different date ranges, for example, this year and this month.

To achieve that, you can simply create a dashboard for this year data, then click the Duplicate icon to create a copy and adjust the date range setting to this month.

### Timezone

When you create a dashboard and add a widget to it, the timezone is determined by the Localization preferences in your Emplifi account settings.

---

## Widgets Dictionary

This section provides a comprehensive overview of widgets that are available in Emplifi's [Dashboard](https://docs.emplifi.io/platform/latest/home/dashboard) module. Dashboard module's widgets are separate from the widgets that are available in [Unified Analytics](https://docs.emplifi.io/platform/latest/home/analytics).

### Widget's characteristics

#### Widget Name

The name of the widget as it appears in Dashboard.

#### General description

Description of a widget that outlines its functions. In case of cross-platform widget, it description is platform-neutral.

#### Platform

Lists platforms where the widget can be deployed.

#### Platform reach

- **Cross-platform** - You can use a cross-platform widget to analyze multiple platforms simultaneously. For more information, see the list of [Cross-platform widgets](https://docs.emplifi.io/platform/latest/home/cross-platform-widgets).
- **Multi-platform** - A multi-platform widget works with several platforms but can only analyze one platform at a time. In other words, you need to deploy one widget per platform.
- **N/A** - A widget is either platform-agnostic or supports just one platform as indicated.

#### Alternative/specific description

Typically, an alternative or specific description expands on generic description either by providing more details or by describing how the widget works on specific platforms.

#### Organic or Boosted

Determines, whether the widget shows data from the organic or the boosted (paid) content (or both).

Individual social network platforms may change what type of data are processed by their APIs. This can happen with or without announcement and may not be included in the respective platform's documentation.

#### Private or Public

Indicates whether the widget works with private or public data.

#### Post-level or Profile-level

- **Post-level widgets** - Display lifetime data from individual posts published during the selected time period of your analysis. All post data is aggregated and displayed for the day the post was published, regardless of when the engagement happened.

When you analyze a post-level metric, you will see the performance of your content published during the selected time range - or as part of a specific campaign.

- **Profile-level widgets** - Attribute data to the profile/page, focusing on when engagement happened, regardless if a post was published during the analyzed date range or not. Data is aggregated by when it happened, and it is not related to a specific piece of content.

By analyzing a profile-level metric, you will see the overall performance of your profile(s) during a selected range.

For more information, see [Post Level vs Profile Level Widgets](https://docs.emplifi.io/platform/latest/home/post-level-vs-profile-level-widgets).

#### ADS

This widget only accepts ad accounts as sources, therefore the data are only coming ads or boosted posts. Typically, such data are boosted + Private. Historical availability of ads data for all platforms is two years from connecting an account.

#### Aggregation

How the widget (metric) is calculated.

#### Dashboard template

Dashboard template availability.

#### Dimension

Definition of the metric's dimension.

#### Module

Platform module that the widget is specific to.

### Common abbreviations

| Abbreviation | Meaning |
|--------------|---------|
| Ads | advertising, Ads and paid content |
| AN | Audience Network |
| AB | Global App bundle |
| FB | Facebook |
| GB | Google Business |
| IG | Instagram |
| LI | LinkedIn |
| Me | Meta Messenger |
| Pa | Pangle |
| PN | Publisher Network |
| PT | Pinterest |
| SC | Snapchat |
| TT | TikTok |
| X (TW) | X (formerly Twitter) |
| WA | WhatsApp |
| YT | YouTube |

### Additional information

Some widget availability depends on your Emplifi pricing plan. If you find a widget that is not available in your Emplifi plan, contact your Emplifi account manager.

**Related links:**

- [Widgets by Platform](https://docs.emplifi.io/platform/latest/home/widgets-by-platform)
- [Post Level vs Profile Level Widgets](https://docs.emplifi.io/platform/latest/home/post-level-vs-profile-level-widgets)
- [How to Approach Instagram and Facebook Views and Impressions Data](https://docs.emplifi.io/platform/latest/home/how-to-approach-instagram-and-facebook-views-and-i)
- [Scientific Notation in Data Visualizations](https://docs.emplifi.io/platform/latest/home/scientific-notation-in-data-visualizations)
- [LinkedIn API Migration](https://docs.emplifi.io/platform/latest/home/linkedin-api-migration)
