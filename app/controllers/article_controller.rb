class ArticleController < ApplicationController
  include Rails.application.routes.url_helpers
  before_action :set_article, only: [:show, :update, :destroy]

  def index
    @articles = Article.where(publish: true)
    render json: @articles
  end

  def show
    render json: [rails_blob_path(@article.image, disposition: "attachment"), @article]
  end

  def get_image
    article = Article.find(params[:id])
    render json: rails_blob_path(article.image, disposition: "attachment")
  end

  def get_articles_by_date
    articles = Article.where('created_at >= ?', params[:start]).where('created_at <= ?', params[:end] + 'T23:59:59.000Z')
    render json: articles
  end

  def new
    @article = Article.new
  end

  def create
    @article = Article.new(article_params)
    if @article.save
      render json: @article
    else
      render json: @article.errors, status: :unprocessable_entity
    end
  end

  def update
    if @article.update(article_params)
      render json: @article
    else
      render json: @article.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @article.destroy
  end

  private
  def set_article
    @article = Article.find(params[:id])
  end

  def article_params
    params.require(:article).permit(:id, :title, :content, :publish)
  end
end
