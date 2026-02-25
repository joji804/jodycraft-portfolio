namespace JodyCraft.Portfolio.Models;

/// <summary>
/// スキル項目を表すモデル
/// </summary>
public class SkillItem
{
    public string Name { get; set; } = "";
    public string Category { get; set; } = "";
    public int Proficiency { get; set; } // 1-5
    public string Description { get; set; } = "";
    public string Icon { get; set; } = "";
}
