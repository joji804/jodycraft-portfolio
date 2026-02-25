namespace JodyCraft.Portfolio.Models;

/// <summary>
/// プロジェクト情報を表すモデル
/// </summary>
public class ProjectInfo
{
    public string Title { get; set; } = "";
    public string Description { get; set; } = "";
    public string ImageUrl { get; set; } = "";
    public string[] Technologies { get; set; } = [];
    public string? DemoUrl { get; set; }
    public string? GitHubUrl { get; set; }
    public bool IsHighlighted { get; set; }
}
