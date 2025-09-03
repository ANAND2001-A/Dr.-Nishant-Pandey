import React from 'react';
import Icon from '../../../core/components/ui/AppIcon';
import Button from '../../../core/components/ui/Button';

const SocialMediaLinks = () => {
    const socialPlatforms = [
        {
            id: 'twitter',
            name: 'Twitter',
            handle: '@authorhubpro',
            followers: '12.5K',
            description: 'Daily writing insights and literary discussions',
            url: 'https://twitter.com/authorhubpro',
            icon: 'Twitter',
            color: 'bg-blue-500',
            recentActivity: 'Posted 2 hours ago'
        },
        {
            id: 'instagram',
            name: 'Instagram',
            handle: '@authorhubpro',
            followers: '8.2K',
            description: 'Behind-the-scenes writing process and book photography',
            url: 'https://instagram.com/authorhubpro',
            icon: 'Instagram',
            color: 'bg-pink-500',
            recentActivity: 'Story updated 4 hours ago'
        },
        {
            id: 'linkedin',
            name: 'LinkedIn',
            handle: 'AuthorHub Pro',
            followers: '5.8K',
            description: 'Professional updates and industry insights',
            url: 'https://linkedin.com/in/authorhubpro',
            icon: 'Linkedin',
            color: 'bg-blue-600',
            recentActivity: 'Article published yesterday'
        },
        {
            id: 'youtube',
            name: 'YouTube',
            handle: 'AuthorHub Pro',
            followers: '3.1K',
            description: 'Writing tutorials and book discussions',
            url: 'https://youtube.com/@authorhubpro',
            icon: 'Youtube',
            color: 'bg-red-600',
            recentActivity: 'New video 3 days ago'
        },
        {
            id: 'goodreads',
            name: 'Goodreads',
            handle: 'AuthorHub Pro',
            followers: '2.9K',
            description: 'Book reviews and reading recommendations',
            url: 'https://goodreads.com/authorhubpro',
            icon: 'BookOpen',
            color: 'bg-amber-600',
            recentActivity: 'Review posted 1 week ago'
        },
        {
            id: 'medium',
            name: 'Medium',
            handle: '@authorhubpro',
            followers: '4.3K',
            description: 'In-depth articles on writing craft and literature',
            url: 'https://medium.com/@authorhubpro',
            icon: 'Edit',
            color: 'bg-gray-800',
            recentActivity: 'Article published 5 days ago'
        }
    ];

    const handleSocialClick = (url) => {
        window.open(url, '_blank');
    };

    return (
        <div className="bg-card border border-border rounded-xl p-8 literary-shadow">
            <div className="mb-8">
                <h3 className="text-2xl font-crimson font-semibold text-primary mb-2">
                    Connect on Social Media
                </h3>
                <p className="text-text-secondary">
                    Follow for daily writing insights, book updates, and behind-the-scenes content
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {socialPlatforms?.map((platform) => (
                    <div
                        key={platform?.id}
                        className="border border-border rounded-lg p-6 literary-transition hover:literary-shadow group"
                    >
                        <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center space-x-3">
                                <div className={`w-12 h-12 ${platform?.color} rounded-lg flex items-center justify-center`}>
                                    <Icon name={platform?.icon} size={24} color="white" strokeWidth={2} />
                                </div>
                                <div>
                                    <h4 className="font-medium text-text-primary">{platform?.name}</h4>
                                    <p className="text-sm text-text-secondary">{platform?.handle}</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className="text-lg font-bold text-primary">{platform?.followers}</p>
                                <p className="text-xs text-text-secondary">followers</p>
                            </div>
                        </div>

                        <p className="text-sm text-text-secondary mb-4">{platform?.description}</p>

                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                <span className="text-xs text-text-secondary">{platform?.recentActivity}</span>
                            </div>
                        </div>

                        <Button
                            variant="outline"
                            fullWidth
                            onClick={() => handleSocialClick(platform?.url)}
                            className="group-hover:border-primary group-hover:text-primary"
                            iconName="ExternalLink"
                            iconPosition="right"
                        >
                            Follow on {platform?.name}
                        </Button>
                    </div>
                ))}
            </div>
            <div className="mt-8 p-6 bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg border border-primary/20">
                <div className="text-center">
                    <h4 className="text-lg font-crimson font-semibold text-primary mb-2">
                        Stay Updated
                    </h4>
                    <p className="text-text-secondary mb-4">
                        Get the latest book releases, writing tips, and exclusive content delivered to your inbox
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent literary-transition"
                        />
                        <Button
                            variant="default"
                            className="bg-primary text-primary-foreground hover:bg-primary/90"
                        >
                            Subscribe
                        </Button>
                    </div>
                    <p className="text-xs text-text-secondary mt-2">
                        No spam, unsubscribe anytime. Privacy policy applies.
                    </p>
                </div>
            </div>
            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                    <p className="text-2xl font-bold text-primary">50K+</p>
                    <p className="text-sm text-text-secondary">Total Followers</p>
                </div>
                <div>
                    <p className="text-2xl font-bold text-primary">1.2M</p>
                    <p className="text-sm text-text-secondary">Monthly Reach</p>
                </div>
                <div>
                    <p className="text-2xl font-bold text-primary">95%</p>
                    <p className="text-sm text-text-secondary">Engagement Rate</p>
                </div>
                <div>
                    <p className="text-2xl font-bold text-primary">Daily</p>
                    <p className="text-sm text-text-secondary">Content Updates</p>
                </div>
            </div>
        </div>
    );
};

export default SocialMediaLinks;