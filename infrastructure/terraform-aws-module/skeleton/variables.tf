variable "environment" {
  description = "Environment name (dev, staging, prod)"
  type        = string
}

variable "project_name" {
  description = "Project name for resource tagging"
  type        = string
  default     = "${{ values.name }}"
}

variable "tags" {
  description = "Additional tags for resources"
  type        = map(string)
  default     = {}
}
